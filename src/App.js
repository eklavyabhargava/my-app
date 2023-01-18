import './App.css';
import Top from './top';
import Bottom from './bottom';
import Navbar from './nav';
import About from './about.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='about' element={<About/>}/>
        </Routes>
      </BrowserRouter>

      <Navbar/>
      <Top body="title"></Top>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla lacus at nunc imperdiet finibus. 
         In non lectus ligula. Mauris iaculis nibh non felis pellentesque ullamcorper. Phasellus euismod tempus tellus, 
         sed posuere sem faucibus eget. Morbi lectus nulla, mollis sed pellentesque at, posuere a arcu. In lacus ipsum, 
         tincidunt id magna eu, aliquam faucibus magna. Ut iaculis iaculis libero, a sollicitudin velit laoreet vitae.
         Praesent vitae dui feugiat, vulputate sapien quis, elementum enim. Proin bibendum, lorem eu commodo lobortis, 
         lorem magna dictum quam, et egestas felis dui eu purus. Morbi faucibus viverra varius. Sed tristique lorem id 
         auctor malesuada. Maecenas mattis vel tellus a pellentesque. Interdum et malesuada fames ac ante ipsum primis 
         in faucibus. Vivamus vitae lorem tellus. Integer maximus, nulla sed luctus blandit, lacus mauris hendrerit elit, 
         eget bibendum arcu ex pellentesque purus. Sed porta ante id porttitor molestie. Nam elit purus, luctus in 
         lorem quis, faucibus tincidunt dolor. Quisque ut metus quam. Maecenas pulvinar, nibh ac tincidunt rutrum, 
         neque nisl euismod ipsum, vitae ultricies massa magna id massa. In tincidunt lectus dui, a vestibulum lectus 
         molestie vel. Quisque eget erat enim. Ut molestie lorem nec convallis pharetra. Aliquam fringilla varius nunc 
         ac gravida. Aenean et tincidunt sem. Ut sed ultrices nisl, ac efficitur est. Cras pharetra, justo sit amet 
         interdum efficitur, ligula nulla maximus nulla, a porttitor neque lacus nec erat. Phasellus ut vestibulum 
         mauris, quis sollicitudin lectus. Cras ut blandit ipsum, et accumsan felis. 
         Donec tempor porttitor imperdiet. Curabitur luctus risus sit amet massa auctor sodales ut vel leo. 
         Aliquam tincidunt, augue vitae pretium facilisis, ante dui pretium purus, eget accumsan diam lacus a nulla. 
         Aenean placerat imperdiet tortor, non lacinia tellus porta in. Nunc nec dolor eu turpis aliquet maximus. 
         Suspendisse eu malesuada nisl. Integer eu metus eget lacus pulvinar interdum vel pellentesque est. Aliquam 
         luctus nibh quis accumsan consequat. Proin urna nulla, blandit et euismod sed, luctus eu nisl. Pellentesque 
         consectetur volutpat mi id iaculis. Cras imperdiet mi id scelerisque condimentum. Maecenas mollis nunc at 
         posuere iaculis. Integer lobortis est ut scelerisque dapibus. Praesent congue velit nisl, at congue nisl 
         elementum eget. Sed id interdum tellus. Etiam varius in tellus id vulputate. 
         Nam ut malesuada nisl. Duis finibus lectus nisi, blandit hendrerit metus facilisis eget. Sed at maximus 
         justo. Nunc quis feugiat arcu, in mollis velit. Maecenas interdum accumsan porttitor. Phasellus ut convallis 
         nisi. Vestibulum nisl purus, aliquet non sapien a, sagittis gravida est. Curabitur scelerisque libero eget 
         dolor consectetur, sodales aliquam metus posuere. Sed ullamcorper ullamcorper erat, at porttitor turpis congue 
         sed. Cras pretium orci sed mollis placerat.</p>
      <Bottom year="2023"></Bottom>
    </div>
  );
}

export default App;
