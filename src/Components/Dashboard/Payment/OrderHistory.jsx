import React, { useContext } from 'react';
import { AuthProvider } from '../../../ContextProvider/ContextProvider';
import UseAxiosSecure from '../../../AxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const OrderHistory = () => {
    const {user}=useContext(AuthProvider);
    const [axiosSecure]=UseAxiosSecure();
    const {
      data: orders = [],
      refetch,
    } = useQuery({
      queryKey: ["payments",user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`);
        return res.data;
      },
    });

    

    
    return (
      <div>
        
        <div>
          <div className="flex flex-row justify-evenly items-center">
            <h2 className="text-3xl">Your Total Item {orders.length}</h2>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                  </th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Transaction Id</th>
                  <th>Confirmed Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.img}
                              alt="item image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span> */}
                      <h2 className="text-red-600">{item.price} $</h2>
                    </td>
                    <td>{item.transactionId}</td>
                    <td>{item.date}</td>
                    <td>
                      <button
                        onClick={() => hanadleDelete(item._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        {item.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default OrderHistory;