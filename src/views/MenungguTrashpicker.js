import Layout from "../layout/Layout"
import "./HalamanNotifikasi.css"
import API from "../api/api"
import { useState, useEffect } from "react"
import Pusher from "pusher-js";
import { useHistory } from "react-router";

const MenungguTrashpicker = () => {

  const token = localStorage.getItem('token')
  const history = useHistory()

  let authorizer = (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        fetch("https://shrouded-waters-92407.herokuapp.com/broadcasting/auth", {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }),
          body: JSON.stringify({
            socket_id: socketId,
            channel_name: channel.name,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(
                `Received ${res.statusCode
                } from ${"https://shrouded-waters-92407.herokuapp.com/broadcasting/auth"}`
              );
            }
            return res.json();
          })
          .then((data) => {
            callback(null, data);
          })
          .catch((err) => {
            console.log(err)
            callback(new Error(`Error calling auth endpoint: ${err}`), {
              auth: "",
            });
          });
      },
    };
  };

  useEffect(async () => {

    const pusher = new Pusher("2961fc07477b62c13f9d", {
      cluster: "ap1",
      authorizer: authorizer,
    });

    const currentPenjualan = await API.get('/api/p/current-penjualan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const channel = pusher.subscribe(`private-penjualan-sampah.${currentPenjualan.data.data.penjualan.id}`);

    channel.bind("penjualan-sampah-pengguna-notification", (data) => {
      alert(data.message);

      if (data.message == "tunggu" || data.message == "tiba") {
        history.push('/permintaan-diterima')
      }
      else if (data.message == "selesai") {
        history.push('/')
      }
    });

    if (currentPenjualan.data.data.penjualan.id_trashpicker != null) {
      history.push('/permintaan-diterima')
    }

  }, []);

  const [dataPenjualan, setDataPenjualan] = useState([])

  useEffect(async () => {
    const dataPenjualan = await API.get('/api/p/current-penjualan', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    setDataPenjualan(dataPenjualan.data)
  }, [])

  return (
    <Layout className="notification-page-bg">
      <div className="notifikasi-wrapper">
        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49 88.1998C70.6495 88.1998 88.2 70.6494 88.2 48.9998C88.2 27.3502 70.6495 9.7998 49 9.7998C27.3504 9.7998 9.79999 27.3502 9.79999 48.9998C9.79999 70.6494 27.3504 88.1998 49 88.1998ZM67.1648 42.6646C69.0784 40.7511 69.0784 37.6485 67.1648 35.735C65.2512 33.8214 62.1487 33.8214 60.2352 35.735L44.1 51.8702L37.7648 45.535C35.8512 43.6214 32.7487 43.6214 30.8352 45.535C28.9216 47.4485 28.9216 50.5511 30.8352 52.4646L40.6352 62.2646C42.5487 64.1782 45.6512 64.1782 47.5648 62.2646L67.1648 42.6646Z" fill="#35BE80" />
        </svg>
        <h2 className="heading-two main-color" style={{ textAlign: "center" }}>Sedang Mencari Trashpicker</h2>
        {/* <button className="btn-notifikasi-redirect-halaman">Kembali Halaman Utama</button> */}
      </div>
    </Layout>
  )
}

export default MenungguTrashpicker