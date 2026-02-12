'use client';

import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";


export default function Dashboard() {

    const [bookmarks, setBookmarks] = useState<any[]>([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const router = useRouter()


    // fetch bookmarks
    const fetchBookmarks = async () => {
        const { data, error } = await supabaseClient
            .from('bookmarks')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error) {
            setBookmarks(data || []);
        }
    };

    useEffect(() => {
        fetchBookmarks();

        const channel = supabaseClient
            .channel('bookmarks-realtime')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'bookmarks',
                },
                (payload) => {
                    console.log("🔥 Realtime event received:", payload);
                    fetchBookmarks();
                }
            )
            .subscribe((status) => {
                console.log("Realtime status:", status);
            });

        return () => {
            supabaseClient.removeChannel(channel);
        };
    }, []);

    useEffect(() => {

        const checkUser = async () => {
            const { data } = await supabaseClient.auth.getUser();

            if (!data.user) {
                router.push("/login");
            }
        };

        checkUser();

    }, []);



    const addBookmark = async () => {
        if (!title || !url) return

        const { data: { user } } = await supabaseClient.auth.getUser();

        if (!user) return ;

        await supabaseClient.from('bookmarks').insert({
            title,
            url,
            user_id: user.id
        });

        setTitle('');
        setUrl('');

        fetchBookmarks();
        toast.success("Bookmark added successfully 🚀");

    };

    const deleteBookmark = async (id: string) => {
        console.log(id)
        const { error } = await supabaseClient
            .from("bookmarks")
            .delete()
            .eq("id", id);

        fetchBookmarks()
        toast.success("Bookmark deleted");

        if (error) {
            toast.error("Something went wrong");
        }
    };

    const logout = async () => {
        await supabaseClient.auth.signOut()
        toast.success("Logouted successfully");
        setTimeout(() => {
            router.push('/login')
        }, 1000)
    }


    return (
        <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex justify-center  p-3 py- sm:p-10">

            <div className="w-full max-w-2xl space-y-8">

                <div className="flex justify-between items-center">
                    <h1 className="text-2xl sm:text-4xl font-black bg-linear-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                        Cloud Link
                    </h1>

                    <button
                        onClick={logout}
                        className="font-mono text-black border border-red-300 px-4 py-2 rounded-xl hover:bg-red-400  hover:scale-105 transition"
                    >
                        Logout
                    </button>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-2xl  p-5 sm:p-8 space-y-4 border border-slate-200">

                    <input
                        placeholder="Bookmark title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-700 outline-none"
                    />

                    <input
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-green-700 outline-none"
                    />

                    <button
                        onClick={addBookmark}
                        className=" bg-linear-to-r from-green-600 to-green-800 text-white w-full py-3 rounded-xl font-medium hover:bg-green-700 hover:scale-[1.02] transition"
                    >
                        Add Bookmark
                    </button>

                </div>

                <div className="space-y-4">

                    {bookmarks.map((b) => {



                        return (

                            <div
                                key={b.id}
                                className="bg-white rounded-2xl -md p-5 flex justify-between items-center  hover:-translate-y-1 transition-all duration-300"
                            >

                                <div className="flex items-center gap-3">



                                    <div>
                                        <p className="font-semibold text-slate-800">
                                            {b.title}
                                        </p>

                                        <a
                                            href={b.url}
                                            target="_blank"
                                            className="text-blue-600 text-sm hover:underline"
                                        >
                                            {b.url}
                                        </a>
                                    </div>

                                </div>

                                <button
                                    onClick={() => deleteBookmark(b.id)}
                                    className="text-red-500 hover:text-red-700 font-medium"
                                >
                                    Delete
                                </button>

                            </div>

                        );
                    })}

                </div>

            </div>

        </div>
    );


}
