import React from "react";
import { Button, Input } from "../../atoms";

const index = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Tracking</h1>
      </div>
      <div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-header">
                <h3>Lacak ordermu</h3>
              </div>
              <div className="card-body">
                <form>
                  <Input label="Nomor Order" name="no-order" />
                  <Button
                    className="btn btn-primary float-end"
                    type="submit"
                    children="Submit"
                  />
                </form>
              </div>
              <div className="card-footer">
                <p>
                  Ada masalah? <a href="#">Chat Whatsapp</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No Order</th>
                  <th>Nama Customer</th>
                  <th>Tanggal Order</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1234567890</td>
                  <td>Aceng</td>
                  <td>Selasa, 1 Maret 2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Waktu</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Selasa, 11 April 2023 11:00</td>
                  <td>Design</td>
                </tr>
                <tr>
                  <td>Selasa, 12 April 2023 12:00</td>
                  <td>Printing</td>
                </tr>
                <tr>
                  <td>Selasa, 13 April 2023 13:00</td>
                  <td>Press</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="d-flex">
        <div className="col"></div>
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Waktu</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Selasa, 11 April 2023 11:00</td>
                <td>Design</td>
              </tr>
              <tr>
                <td>Selasa, 12 April 2023 12:00</td>
                <td>Printing</td>
              </tr>
              <tr>
                <td>Selasa, 13 April 2023 13:00</td>
                <td>Press</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default index;
