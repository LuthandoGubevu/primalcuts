
import Image from 'next/image';

const icons = [
  { src: '/PC-Elements-22.png', alt: 'Feature Icon 1', hint: 'feature icon one' },
  { src: '/PC-Elements-23.png', alt: 'Feature Icon 2', hint: 'feature icon two' },
  { src: '/PC-Elements-24.png', alt: 'Feature Icon 3', hint: 'feature icon three' },
  { src: '/PC-Elements-25.png', alt: 'Feature Icon 4', hint: 'feature icon four' },
  { src: '/PC-Elements-10.png', alt: 'Whole30 Approved Icon', hint: 'whole30 approved icon' },
];

export default function IconsRow() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center gap-8 flex-wrap">
        {icons.map((icon, index) => (
          <div key={index} className="w-16 h-16">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={64}
              height={64}
              className="object-contain w-full h-full"
              data-ai-hint={icon.hint}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
