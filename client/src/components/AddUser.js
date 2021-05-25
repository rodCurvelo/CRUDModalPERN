import React, { Fragment } from "react";
import InputList from "./InputList";

const AddUser = () => {
    return(
    <Fragment>
    <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#myModal">Add User</button>

    <div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <div class="modal-body">
            < InputList/>
        </div>

        <div class="modal-footer">
        </div>

        </div>
    </div>
    </div>
    </Fragment>
)};
     
export default AddUser;