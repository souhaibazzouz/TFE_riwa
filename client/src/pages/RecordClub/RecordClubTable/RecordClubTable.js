import React from "react";
import { Table } from "react-bootstrap";
import AllCatSideBar from '../../../components/Sidebar/AllCatSideBar';

import data from "./tableData.js";

const RecordClubTable = () => {
    return (
        <>
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <AllCatSideBar />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="table__content">
                                <div className="card-header">
                                    <h4 className="card-title">Datatable</h4>
                                </div>
                                <div className="card-body">
                                    <Table className="w-100">
                                        <div className="dataTables_wrapper">
                                            <table
                                                id="example"
                                                className="display w-100 dataTable"
                                                role="grid"
                                                aria-describedby="example_info"
                                            >
                                                <thead>
                                                    {data.jobsTable.columns.map((d, i) => (
                                                        <th key={i}>{d}</th>
                                                    ))}
                                                </thead>
                                                <tbody>
                                                    {data.jobsTable.data.map((d, i) => (
                                                        <tr key={i}>
                                                            {d.map((da, i) => (
                                                                <td key={i}>{da}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot>
                                                    <tr role="row">
                                                        {data.jobsTable.columns.map((d, i) => (
                                                            <th key={i}>{d}</th>
                                                        ))}
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecordClubTable;
