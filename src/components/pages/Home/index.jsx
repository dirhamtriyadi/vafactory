import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/id";
import { CariForm } from "../../molecules/";
import { getData } from "../../store/Home";

const Home = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.home);

  const handleSubmit = (e) => {
    dispatch(getData(e));
  }

  return (
    <div className="container">
      <div className="mt-3 text-center">
        <h1>Tracking</h1>
      </div>
      <div>
        <div className="mt-3 row">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-header">
                <h3>Lacak ordermu</h3>
              </div>
              <div className="card-body">
                <CariForm onSubmit={handleSubmit} />
              </div>
              <div className="card-footer">
                <p>
                  Ada masalah? <a href="#">Chat Whatsapp</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>No Order</th>
                  <th>Nama Customer</th>
                  <th>Tanggal Order</th>
                </tr>
              </thead>
              <tbody>
                {data ? (
                    data.map((list, index) => {
                      return (
                        <tr key={index}>
                          <td>{list.order_number}</td>
                          <td>{list.customer.name}</td>
                          <td>{moment(list.order_date).format('dddd, DD MMMM YYYY')}</td>
                        </tr>
                      )
                    })
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Waktu</th>
                  <th>Keterangan</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data ? (
                    data[0].orderTracking.slice().reverse().map((list, index) => {
                      return (
                        <tr key={index}>
                          <td>{moment(list.date).format('dddd, DD MMMM YYYY HH:mm:ss')}</td>
                          <td>{list.tracking.name}</td>
                          <td>{list.status === 0 ? "Dalam Proses" : "selesai"}</td>
                        </tr>
                      )
                    })
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
