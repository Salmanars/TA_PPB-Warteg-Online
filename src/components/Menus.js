import React, { useState } from 'react';
import { Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { numberWithCommas } from '../utils/utils';
import { API_URL } from "../utils/constants";

export const Menus = ({ menu, masukKeranjang }) => {
  // State untuk menampilkan modal
  const [showModal, setShowModal] = useState(false);

  // Fungsi untuk menutup modal
  const handleClose = () => setShowModal(false);

  // Fungsi untuk membuka modal
  const handleShow = () => setShowModal(true);

  // Fungsi untuk menambah item ke keranjang
  const tambahKeKeranjang = (menu) => {
    axios
      .post(API_URL + "keranjangs", menu)  // Kirim item ke keranjang
      .then((res) => {
        console.log("Item berhasil ditambahkan ke keranjang:", res.data);
        masukKeranjang(res.data);  // Update state keranjang di halaman
      })
      .catch((err) => {
        console.error("Gagal menambahkan item ke keranjang:", err);
      });
  };

  return (
    <>
      {/* Card yang menampilkan menu */}
      <Col md={4} xs={6} className='mb-4'>
        <Card className="shadow" onClick={handleShow}>
          <Card.Img
            variant="top"
            src={menu.gambar}
          />
          <Card.Body>
            <Card.Title>{menu.nama} <strong>{menu.kode}</strong></Card.Title>
            <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal untuk menampilkan detail menu */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{menu.nama} - {menu.kode}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={menu.gambar}
            alt={menu.nama}
            className="img-fluid"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
          <h5 className="mt-3">Harga: Rp {numberWithCommas(menu.harga)}</h5>
          <p>Kategori: {menu.category.nama}</p>
          <p><strong>Kode Produk:</strong> {menu.kode}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={() => tambahKeKeranjang(menu)}>
            Masuk Keranjang
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Menus;
