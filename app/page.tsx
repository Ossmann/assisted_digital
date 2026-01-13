export default function Page() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative w-full max-w-3xl aspect-[16/10] border-20 border-black shadow-2xl mx-8 rounded-2xl overflow-hidden -mt-20">
        <iframe
          src="/landing"
          className="absolute inset-0 w-full h-full border-0 rounded-2xl"
          title="Responsive iframe"
          style={{
            overflow: 'hidden',
            transform: 'scale(0.75)',
            height: '100%',
            width: '100%',
            overscrollBehavior: 'none', // modern replacement for scrolling="no"
            msOverflowStyle: 'none',    // IE/Edge scrollbar
            scrollbarWidth: 'none',     // Firefox scrollbar
          }}
        />
      </div>
    </div>
  );
}
