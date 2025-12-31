import { Instagram, Youtube } from 'lucide-react';
import { CONTACT_DATA } from '../../data/contact.data';

const SocialSeparator = () => {
    return (
        <section className="py-16 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">

                    {/* Placeholder Image Area */}
                    <div className="w-full md:w-1/2">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex items-center justify-center group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-gray-100 opacity-50"></div>
                            <img
                                src="/assets/images/about/image.png"
                                alt="Brand Visual"
                                className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                        </div>
                    </div>

                    {/* Social Links Area */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold text-gray-900">Follow Our Journey</h3>
                            <p className="text-gray-600">
                                Watch our latest cleaning projects and customer transformations on social media.
                            </p>
                        </div>

                        <div className="flex gap-8">
                            {/* Instagram */}
                            {CONTACT_DATA.socials.instagram && (
                                <a
                                    href={CONTACT_DATA.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center gap-3"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-1 shadow-lg shadow-pink-200 group-hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <Instagram size={32} className="text-[#dc2743]" />
                                        </div>
                                    </div>
                                    <span className="font-semibold text-gray-800 text-sm group-hover:text-[#dc2743] transition-colors">Instagram</span>
                                </a>
                            )}

                            {/* YouTube */}
                            {CONTACT_DATA.socials.youtube && (
                                <a
                                    href={CONTACT_DATA.socials.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center gap-3"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-[#FF0000] p-1 shadow-lg shadow-red-200 group-hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                                            <Youtube size={32} className="text-[#FF0000]" />
                                        </div>
                                    </div>
                                    <span className="font-semibold text-gray-800 text-sm group-hover:text-[#FF0000] transition-colors">YouTube</span>
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialSeparator;
