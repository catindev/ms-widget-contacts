import React from 'react'
import './styles.css'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            phone: props.phone,
            contactID: props.contactID
        }
        this.clickCallback = this.clickCallback.bind(this)
        this.clickRemove = this.clickRemove.bind(this)
        this.clickEdit = this.clickEdit.bind(this)
    }

    clickCallback() {
        const { contactID, name } = this.state
        this.props.onCallback({ contactID, name })
    }

    clickRemove() {
        const { contactID, name } = this.state
        const isRemove = window.confirm(
            'Удалить контакт «' + name + '»?\n\n' +
            'Удалив его вы больше не сможете позвонить по этому номеру. ' +
            'Если клиент позвонит с него, то попадёт в список горячих лидов ☝️🤓'
        )

        isRemove && this.props.onRemove({ contactID })
    }

    clickEdit() {
        window.location.href = '/contacts/' + this.state.contactID + '/edit'
    }

    render() {
        const { name, phone } = this.state
        const hideMainContactStyles = name === 'Основной' ? { 'display': 'none' } : {}
        return (<div className="bContact">
            <div className="bContact__section bCBW">
                <div
                    className="bCallbackToContactButton"
                    onClick={this.clickCallback}>
                </div>
            </div>

            <div className="bContact__section bContact__main">
                <div className="bContact__name">{name}</div>
                <div className="bContact__phone">{phone}</div>
            </div>

            <div className="bContact__section">
                <div className="bContact__action" style={hideMainContactStyles}>
                    <div className="bEditContactButton"
                        onClick={this.clickEdit}></div>
                </div>
                <div className="bContact__action" style={hideMainContactStyles}>
                    <div className="bRemoveContactButton"
                        onClick={this.clickRemove}></div>
                </div>
            </div>
        </div>)
    }
}
