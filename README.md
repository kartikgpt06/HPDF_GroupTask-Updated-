
Running the app locally

git clone https://github.com/kartikgpt06/HPDF_GroupTask-Updated-


cd HPDF GroupTask-Updated-

npm install

npm start

It will render the HomePage (Goes to Payment Page when clicked on Payment Button on HomePage) by default. to render the Alert Pages (Alert1(Success) and Alert2(Error)) go to index.js and instead of render- 

from: ReactDOM.render(<BrowserRouter>
   <HomePage />
  </BrowserRouter>, document.getElementById('root'));
  

to: ReactDOM.render(<BrowserRouter>
   
   <Alert1 />                                             {/* Alert1 is for Success Page, Use Alert2 for Error Page. */}
   
  </BrowserRouter>, document.getElementById('root'));
