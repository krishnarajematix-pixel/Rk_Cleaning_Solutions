import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ item, isOpen, onClose, onNext, onPrev }) => {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const isVideo = !!item.youtubeId;

  return (
    <div
      onClick={() => onClose && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
    >
      
      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose && onClose(); }}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-60"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Navigation - Left */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Content Container */}
      <div onClick={(e) => e.stopPropagation()} className="w-full h-full flex flex-col items-center justify-center p-4 md:p-10">
        <div className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center">
          
          {isVideo ? (
            <div className="aspect-video w-full h-full bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`} 
                title={item.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img 
              src={item.src} 
              alt={item.alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
            />
          )}
        </div>

        {/* Caption */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-white">{isVideo ? item.title : item.caption}</h3>
          <p className="text-white/60 text-sm mt-1 uppercase tracking-widest">{isVideo ? 'Video' : item.category}</p>
        </div>
      </div>

      {/* Navigation - Right */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block"
      >
        <ChevronRight size={40} />
      </button>

    </div>
  );
};

export default Lightbox;