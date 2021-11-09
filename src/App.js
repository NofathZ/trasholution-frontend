import HalamanLogin from './views/HalamanLogin'
import HalamanRegister from './views/HalamanRegister'
import HalamanPenjemputanSampah from './views/HalamanPenjemputanSampah'
import HalamanVerifikasi from './views/HalamanVerifikasi'
import HalamanUtama from './views/HalamanUtama'
import DetailValidasiSampah from './views/DetailValidasiSampah'
import FormJualSampah from './views/FormJualSampah'
import FormPencairanSaldo from './views/FormPencairanSaldo'
import HalamanUtamaTrashpicker from './views/HalamanUtamaTrashpicker'
import ProfilPengguna from './views/ProfilPengguna'
import ProfilTrashpicker from './views/ProfilTrashpicker'
import TerimaPermintaan from './views/TerimaPermintaan'
import SampahPenggunaDiterima from './views/SampahPenggunaDiterima'
import HalamanDaftarSampah from './views/HalamanDaftarSampah'
import { UserContext } from './context/UserContext'
import './assets/_variable.css';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <UserContext.Provider>
        <Switch>
          <Route path="/login">
            <HalamanLogin />
          </Route>
          <Route path="/register">
            <HalamanRegister />
          </Route>
          <Route path="/trashpicker/jemput-sampah">
            <HalamanPenjemputanSampah />
          </Route>
          <Route path="/verification">
            <HalamanVerifikasi />
          </Route>
          <Route path="/" exact>
            <HalamanUtama />
          </Route>
          <Route path="/detail-validasi">
            <DetailValidasiSampah />
          </Route>
          <Route path="/jual-sampah">
            <FormJualSampah />
          </Route>
          <Route path="/saldo">
            <FormPencairanSaldo />
          </Route>
          <Route path="/trashpicker">
            <HalamanUtamaTrashpicker />
          </Route>
          <Route path="/username">
            <ProfilPengguna />
          </Route>
          <Route path="/trashpickername">
            <ProfilTrashpicker />
          </Route>
          <Route path="/terima-permintaan">
            <TerimaPermintaan />
          </Route>
          <Route path="/permintaan-diterima">
            <SampahPenggunaDiterima />
          </Route>
          <Route path="/daftar-sampah">
            <HalamanDaftarSampah />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
