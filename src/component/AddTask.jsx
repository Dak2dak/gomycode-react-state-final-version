import React from "react";

function AddTask (props) {

        const {onChange, onSubmit} = props;

        return (
            <form className="form-group" onSubmit={onSubmit}>
                <div className="col-auto">
                    <label className="visually-hidden">
                        Task name
                    </label>
                    <input type="text" className="form-control" placeholder="Add to do..." 
                    name="name" onSubmit={onSubmit} onChange={onChange}/>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">
                        Save
                    </button>
                </div>
            </form>
        );
}

export default AddTask;