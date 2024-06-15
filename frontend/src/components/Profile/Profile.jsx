import React, { useEffect, useState } from 'react';
import { profile, archive, lightscroll, darkscroll, lightsaved, darksaved, darktagged, lighttagged, lightstory, darkstory } from '@/assets';
import useTheme from '@/contexts/theme';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Profile() {
    const [username, setUsername] = useState("Pushparaj Mehta");
    const [dark, setIsDark] = useState();
    const [bio, setBio] = useState("This is my bio");
    const [story,setStory] = useState(false);
    const [editing, setEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [newBio, setNewBio] = useState(bio);
    const { themeMode } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, [themeMode]);

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleSave = () => {
        setUsername(newUsername);
        setBio(newBio);
        setEditing(false);
    };

    return (
        <div className="p-4">
            <div className="flex flex-col items-center justify-center-full max-w-5xl mx-auto">
                <div className="w-full text-center sm:text-left border-b-2 dark:border-white border-gray-700 pb-4 mb-4 md:pb-12 md:mb-12">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
                        {story ? (

                            <img src={story} alt />
                        ) : (
                            <img src={profile} alt="Profile" className="rounded-full w-32 h-32 mx-auto sm:mx-0 sm:mr-4 mb-4 sm:mb-0" />

                        )}
                        <div className="flex flex-col items-center sm:items-start">
                            {editing ? (
                                <div className="mb-4 sm:w-full">
                                    <input
                                        type="text"
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)}
                                        className="w-full p-2 mb-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-900"
                                    />
                                    <textarea
                                        value={newBio}
                                        onChange={(e) => setNewBio(e.target.value)}
                                        className="w-full p-2 mb-2 border rounded-lg text-gray-700 dark:text-gray-300 dark:bg-gray-900"
                                    />
                                    <div className="flex justify-center sm:justify-start">
                                        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mr-2">Save</button>
                                        <button onClick={handleEditToggle} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-4 sm:w-full">
                                    <h2 className="text-2xl font-bold text-black dark:text-white">{username}</h2>
                                    <p className="text-gray-700 dark:text-gray-300">{bio}</p>
                                    <div className="flex justify-center sm:justify-start mt-2">
                                        <button onClick={handleEditToggle} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mr-2">Edit Profile</button>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                                            <img src={archive} alt="archive" className="w-8 h-8 mr-2 sm:hidden" />
                                            <p className="hidden md:block">Archives</p>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <h3 className="text-sm md:text-lg md:font-semibold text-black dark:text-white">Posts</h3>
                                    <p className="text-gray-700 dark:text-gray-300">123</p>
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-lg md:font-semibold text-black dark:text-white">Followers</h3>
                                    <p className="text-gray-700 dark:text-gray-300">456</p>
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-lg md:font-semibold text-black dark:text-white">Following</h3>
                                    <p className="text-gray-700 dark:text-gray-300">789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mb-6">
                    <div className="flex justify-around mb-4">
                        <Link to="stories">
                            <button className={`px-4 py-2 ${location.pathname.endsWith('stories') ? 'bg-blue-500 text-white' : 'text-black dark:text-white'} flex rounded-lg`}>
                                <img src={dark ? darkstory : lightstory} alt="stories" className="w-8 h-8 mr-2 p-0" />
                                <p className='hidden md:block my-auto'>Stories</p>
                            </button>
                        </Link>
                        <Link to="highlights">
                            <button className={`px-4 py-2 ${location.pathname.endsWith('highlights') ? 'bg-blue-500 text-white' : 'text-black dark:text-white'} flex rounded-lg`}>
                                <img src={dark ? darkscroll : lightscroll} alt="highlights" className="w-8 h-8 mr-2" />
                                <p className='hidden md:block my-auto'>Highlights</p>
                            </button>
                        </Link>
                        <Link to="saved">
                            <button className={`px-4 py-2 ${location.pathname.endsWith('saved') ? 'bg-blue-500 text-white' : 'text-black dark:text-white'} flex rounded-lg`}>
                                <img src={dark ? darksaved : lightsaved} alt="saved" className="w-8 h-8 mr-2" />
                                <p className='hidden md:block my-auto'>Saved Stories</p>
                            </button>
                        </Link>
                        <Link to="tagged">
                            <button className={`px-4 py-2 ${location.pathname.endsWith('tagged') ? 'bg-blue-500 text-white' : 'text-black dark:text-white'} flex align-middle rounded-lg`}>
                                <img src={dark ? darktagged : lighttagged} alt="tagged" className="w-8 h-8 mr-2" />
                                <p className='hidden md:block my-auto'>Tagged</p>
                            </button>
                        </Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Profile;
