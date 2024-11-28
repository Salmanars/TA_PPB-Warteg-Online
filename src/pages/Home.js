import { Row, Col, Container } from "react-bootstrap";
import { Menus, ListCategories, Hasil } from "../components/";
import React, { Component } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";
import Swal from "sweetalert2";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriYangDipilih: "Makanan",
      keranjangs: []
    };
  }

  componentDidMount() {
    // Mengambil data produk berdasarkan kategori yang dipilih
    axios
      .get(API_URL)
      .then((res) => {
        const menus = res.data.record.products; // Mengakses array 'products' dalam 'record'
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });

    // Mengambil data keranjang
    axios
      .get(API_URL + "/keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.keranjangs !== prevState.keranjangs) {
      axios
        .get(API_URL + "/keranjangs")
        .then((res) => {
          const keranjangs = res.data;
          this.setState({ keranjangs });
        })
        .catch((error) => {
          console.log("Error yaa", error);
        });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    });

    axios
      .get(API_URL + "?category.nama=" + value) // Filter berdasarkan kategori
      .then((res) => {
        const menus = res.data.record.products; // Menyesuaikan dengan struktur JSON
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
  };

  masukKeranjang = (value) => {
    axios
      .get(API_URL + "/keranjangs?product.id=" + value.id)
      .then((res) => {
        let keranjang;

        if (res.data.length === 0) {
          keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value
          };
          axios
            .post(API_URL + "/keranjangs", keranjang)
            .then((res) => {
              Swal.fire({
                title: "Sukses",
                text: "Sukses masuk keranjang " + keranjang.product.nama,
                icon: "success",
                timer: 2000
              });
            })
            .catch((error) => {
              console.log("Error yaa", error);
            });
        } else {
          keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value
          };
          axios
            .put(API_URL + "/keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              Swal.fire({
                title: "Sukses",
                text: "Sukses masuk keranjang " + keranjang.product.nama,
                icon: "success",
                timer: 2000
              });
            })
            .catch((error) => {
              console.log("Error yaa", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
  };

  render() {
    const { menus, categoriYangDipilih, keranjangs } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories
              changeCategory={this.changeCategory}
              categoriYangDipilih={categoriYangDipilih}
            />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <Menus key={menu.id} menu={menu} masukKeranjang={this.masukKeranjang} />
                  ))}
              </Row>
            </Col>
            <Hasil keranjangs={keranjangs} {...this.props} />
          </Row>
        </Container>
      </div>
    );
  }
}
  