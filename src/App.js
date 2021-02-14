import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="ParentBox">
      <ProdukFoto/>
      <ProdukInfo discount="coming" kategori="Futsal" name="Speecs"/>
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
  const { cekdiscount } = props;
  if (cekdiscount == "yes") {
    return(
      <p>Diskon 50% Off</p>
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

  return (
    <div>
      <div className="Deskripsi">
        <p className="Kategori">{kategori}</p>
        <h1 className="Judul">{name}</h1>
        <p className="Harga">720.000</p>
        <CheckDiscount cekdiscount={discount}/>
        <p className="Info">lorem insum</p>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk "+e);
}
export default App;
