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
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import AuthProtectedRoute from './components/protected-route/AuthProtectedRoute'
import './assets/_variable.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react'

function App() {


  return (
    <Router>
      <div>
        <Switch>

          {/* Auth */}
          <AuthProtectedRoute path="/login">
            <HalamanLogin />
          </AuthProtectedRoute>
          <AuthProtectedRoute path="/register">
            <HalamanRegister />
          </AuthProtectedRoute>
          <AuthProtectedRoute path="/verifikasi">
            <HalamanVerifikasi />
          </AuthProtectedRoute>

          {/* Halaman Pengguna */}
          <Route path="/" exact>
            <HalamanUtama />
          </Route>
          <ProtectedRoute path="/jual-sampah">
            <FormJualSampah />
          </ProtectedRoute>
          <ProtectedRoute path="/saldo">
            <FormPencairanSaldo />
          </ProtectedRoute>
          <ProtectedRoute path="/profil-pengguna">
            <ProfilPengguna />
          </ProtectedRoute>
          <ProtectedRoute path="/permintaan-diterima">
            <SampahPenggunaDiterima />
          </ProtectedRoute>
          <Route path="/daftar-sampah">
            <HalamanDaftarSampah />
          </Route>

          {/* Halaman Trashpicker */}
          <Route path="/trashpicker" exact>
            <HalamanUtamaTrashpicker />
          </Route>
          <Route path="/trashpicker/jemput-sampah">
            <HalamanPenjemputanSampah />
          </Route>
          <Route path="/trashpicker/detail-validasi">
            <DetailValidasiSampah />
          </Route>
          <Route path="/trashpicker/profil-trashpicker">
            <ProfilTrashpicker />
          </Route>
          <Route path="/trashpicker/terima-permintaan">
            <TerimaPermintaan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
