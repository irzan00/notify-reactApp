import React from 'react';

function ArchieveButton({id, isArchive, onArchive}) {
    return (
        <button className='note-item__archieve' onClick={() => onArchive(id)}>
            <img src="../public/images/archievebutton.svg" alt="" />
            {isArchive ? 
            <p>Pindahkan</p>
            : 
            <p>Arsipkan</p> }
        </button>
    )
}

export default ArchieveButton;