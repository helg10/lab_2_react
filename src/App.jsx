import Header from './components/Header';
import Experience from './components/Experience';
import CodingEnv from './components/CodingEnv';
import Education from './components/Education';
import ContactInfo from './components/ContactInfo';
function App(){
  return(
    <div className="font-mono font-serif bg-[#f7f3ed] text-[#2c2c2c] leading-[1.6] min-h-screen sm:p-5 flex flex-col items-center p-4">
      <div className="w-full max-w-[800px] bg-white border-2 border-[#dcd6cd] rounded-xl p-5 sm:p-[30px] shadow-[0_4px_12px_rgba(40,39,39,1)] flex flex-col gap-[25px]">
        <Header />
        
        <main className="flex flex-col gap-5">
        <Experience />
        <CodingEnv />
        <Education />
        <ContactInfo />
        </main>

      </div>
    </div>
  );
}
export default App;