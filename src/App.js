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
import ProtectedRouteDefault from './components/protected-route/ProtectedRouteDefault'
import ProtectedRoutePengguna from './components/protected-route/ProtectedRoutePengguna'
import ProtectedRouteTrashpicker from './components/protected-route/ProtectedRouteTrashpicker'
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
          <ProtectedRouteDefault path="/" exact>
            <HalamanUtama />
          </ProtectedRouteDefault>
          <ProtectedRoutePengguna path="/jual-sampah">
            <FormJualSampah />
          </ProtectedRoutePengguna>
          <ProtectedRoutePengguna path="/saldo">
            <FormPencairanSaldo />
          </ProtectedRoutePengguna>
          <ProtectedRoutePengguna path="/profil-pengguna">
            <ProfilPengguna />
          </ProtectedRoutePengguna>
          <ProtectedRoutePengguna path="/permintaan-diterima">
            <SampahPenggunaDiterima />
          </ProtectedRoutePengguna>
          <ProtectedRouteDefault path="/daftar-sampah">
            <HalamanDaftarSampah />
          </ProtectedRouteDefault>

          {/* Halaman Trashpicker */}
          <ProtectedRouteTrashpicker path="/trashpicker" exact>
            <HalamanUtamaTrashpicker />
          </ProtectedRouteTrashpicker>
          <ProtectedRouteTrashpicker path="/trashpicker/jemput-sampah">
            <HalamanPenjemputanSampah />
          </ProtectedRouteTrashpicker>
          <ProtectedRouteTrashpicker path="/trashpicker/detail-validasi">
            <DetailValidasiSampah />
          </ProtectedRouteTrashpicker>
          <ProtectedRouteTrashpicker path="/trashpicker/profil-trashpicker">
            <ProfilTrashpicker />
          </ProtectedRouteTrashpicker>
          <ProtectedRouteTrashpicker path="/trashpicker/terima-permintaan">
            <TerimaPermintaan />
          </ProtectedRouteTrashpicker>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
