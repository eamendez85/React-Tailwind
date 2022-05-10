import './App.css';
import homero from './assets/img/Homero-Simpson.png'
import logo from './assets/img/logo.png'


function App() {
  return (
    <body className='mobile: p-10 w-screen h-screen'>
      <section id="container" className='w-full h-full  flex items-center flex-col justify-between'>
        <div id="homero-container" className='border-b-2 w-full h-2/6'>
          <img src={homero} alt="" className='h-full w-full mg-1/2 object-contain '/>
        </div>
        <div id="btn-container" className='flex flex-col w-full h-2/6 border-b-2 items-center justify-center'>
          <button className='btn'>AboutMe</button>
          <button className='btn'>Briefcase</button>
          <button className='btn'>Projects</button>
        </div>
        <div id="img-container" className="w-full h-2/6 border-b-2">
          <img src={logo} alt="" className='h-full w-full mg-1/2 object-contain' />
        </div>
        <footer className='w-full flex justify-center'>
          <p>Elkin Alejandro Mendez Diaz</p>
        </footer>
      </section>
    </body>
  );
}

export default App;
