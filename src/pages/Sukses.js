import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  // Menambahkan item ke keranjang
  tambahKeKeranjang = (item) => {
    axios
      .post(API_URL + "keranjangs", {
        // Data yang akan ditambahkan ke keranjang
        productId: item.id,
        nama: item.nama,
        harga: item.harga,
        gambar: item.gambar,
        quantity: 1, // Menambahkan satu item keranjang, bisa disesuaikan
      })
      .then((res) => {
        console.log("Item berhasil ditambahkan ke keranjang", res.data);
      })
      .catch((error) => {
        console.log("Error menambahkan item ke keranjang", error);
      });
  };

  // Fungsi untuk refresh halaman dan kembali ke home
  handleRefreshClick = () => {
    // Navigate to "/"
    window.location.href = "/";

    // Reload the entire page after a delay
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  render() {
    // Mengambil item yang diteruskan ke halaman ini (dari sebelumnya)
    const item = this.props.location.state?.item;

    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.png" width="500" />
        <h2>Pesanan diterima</h2>
        <p>Terimakasih sudah memesan</p>

        {/* Button untuk kembali ke halaman utama */}
        <Button variant="primary" as={Link} to="/" onClick={this.handleRefreshClick}>
          kembali
        </Button>

        {/* Tombol untuk menambah item ke keranjang */}
        {item && (
          <Button variant="success" onClick={() => this.tambahKeKeranjang(item)}>
            Masuk Keranjang
          </Button>
        )}
      </div>
    );
  }
}
