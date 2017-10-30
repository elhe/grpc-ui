import React from 'react';

import './Method.sass';


const UnknownField = (props) => <div className="field">
    <label className="field__label" htmlFor={props.name}>{props.name}</label>
    <input className="field__input" name={props.name} id={props.name} type="text" placeholder="string"/>
</div>;

const MessageField = (props) => {
    const type = props.types[props.type_name];
    return <Message {...type} types={props.types}/>
};

const Field = (props) => {
    switch (props.type_id) {
        case 5: // int32:
            return <UnknownField {...props}/>;
        case 8: // boolean
            return <UnknownField {...props}/>;
        case 9: // int32:
            return <UnknownField {...props}/>;
        case 11: // message
            return <MessageField {...props}/>;
        default:
            return <UnknownField  {...props}/>;
    }
};

const Message = (props) =>
    <div>
        {props.fields.map((f) => <Field key={f.name} {...f} types={props.types} /> )}
    </div>;

const Method = (props) =>
    <div className="method">
        <div className="method__heading">
            <h4 className="method__name"> {props.name} <i class="fa fa-angle-down"></i></h4>
        </div>
        <div className="method__body" style={{display: 'none'}}>
            <form>
                <Message {...props.types[props.in]} types={props.types}/>
                <button type="submit" className="btn btn-primary pull-right">Invoke</button>

                <Message {...props.types[props.out]} types={props.types}/>
            </form>
        </div>
    </div>;

export default Method;