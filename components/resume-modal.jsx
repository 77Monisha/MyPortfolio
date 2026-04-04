const ResumeModal = ({ setOpenResume }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 md:px-0">
      <div className="bg-[#0f0f11] border border-white/10 rounded-2xl w-300 max-h-[90vh] overflow-y-auto no-scrollbar p-4 md:p-8 relative">
        <button
          onClick={() => setOpenResume(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          ✕
        </button>
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-base md:text-2xl font-semibold">My Resume</h2>
        </div>
        <iframe
          src="/Monisha_Chaurasia_Resume.pdf"
          className="w-full h-[60vh] md:h-[75vh] rounded-md border"
        />
      </div>
    </div>
  );
};

export default ResumeModal;
