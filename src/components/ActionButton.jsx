/* eslint-disable react/prop-types */
export function ActionButton({actionName, actionFunction}) {
    return (
        <button onClick={actionFunction}>{actionName}</button>
    )
}