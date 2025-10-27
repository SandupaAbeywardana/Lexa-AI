"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Photo {
  src: string;
  title?: string;
  description?: string;
}

interface GalleryCarouselProps {
  readonly photos: Photo[];
  readonly onImageSelect: (src: string) => void;
}

export function GalleryCarousel({
  photos,
  onImageSelect,
}: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    slidesToScroll: 1,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      {/* Carousel with Buttons Beside */}
      <div className="flex items-center gap-4">
        {/* Previous Button */}
        <button
          className="bg-primary hover:bg-opacity-80 text-white rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous image"
        >
          <MdChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Container */}
        <section
          className="flex-1 relative overflow-hidden rounded-lg"
          aria-label="Image carousel"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="flex-[0_0_calc(33.333%-0.666rem)] min-w-0 relative group"
                >
                  {/* Image Container */}
                  <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        {photo.title}
                      </h4>
                      <p className="text-gray-200 text-xs line-clamp-2">
                        {photo.description}
                      </p>
                      <p className="text-white text-xs mt-2">
                        Click to enlarge &rarr;
                      </p>
                    </div>

                    {/* Click Button - Overlay on Top */}
                    <button
                      type="button"
                      onClick={() => onImageSelect(photo.src)}
                      className="absolute inset-0 w-full h-full border-0 p-0 bg-transparent cursor-pointer hover:bg-black/10 transition-colors"
                      aria-label={`View ${photo.title} - Click to enlarge`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Button */}
        <button
          className="bg-primary hover:bg-opacity-80 text-white rounded-full p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next image"
        >
          <MdChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-primary"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
