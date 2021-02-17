import logo from './logo.svg';
import './App.css';
import ReviewItems from './Review';
import PropTypes from 'prop-types';

function App() {

  return (
    <div className="ParentBox">
      <ProdukFoto/>
      <ProdukInfo discount="yes" kategori="Futsal" name="Speecs"/>

      <ReviewItems/>

    </div>
  );
}

function ProdukFoto() {

  return (
    <div>
      <div className="Foto">
        <img src="fotosneaker.jpg"></img>
      </div>
    </div>
  );
}

function CheckDiscount(props) {
  const { cekdiscount, jmlDiscout} = props;
  if (cekdiscount == "yes") {
    return(
      <p>Diskon {jmlDiscout}% Off</p>
    );
  }
  else if(cekdiscount == "coming"){
    return(
      <p>Akan ada diskon</p>
    );
  }
  else{
    return(
      <p>Belum Ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const {kategori, name, discount} = props;
  const benefits = ["Tidak kusut terkena air","Tidak mudah terbakar"];
  const listBenefits = benefits.map((itembenefit) =>
    <li key={itembenefit}>{itembenefit}</li>
  );
  return (
    <div>
      <div className="Deskripsi">
        <p className="Kategori">{kategori}</p>
        <h1 className="Judul">{name}</h1>
        <p className="Harga">720.000</p>
        <CheckDiscount cekdiscount={discount} jmlDiscout={50}/>
        <p className="Info">lorem insum</p>

        <ul>
          {listBenefits}
        </ul>

        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk "+e);
}

CheckDiscount.propTypes={
  jmlDiscout: PropTypes.number.isRequired
};
export default App;
