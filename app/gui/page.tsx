import SelectMenu from '../components/ui/SelectMenu';

export default async function GuiHomePage() {

  return (
    <div className='relative h-screen flex flex-col justify-center items-center'>      
      <div>
        <SelectMenu />
      </div>
{/* 
      <div>
        <Welcome />
      </div> */}

      {/* Empty bottom space */}
      <div className='p-8'></div>
    </div>

  );
}
