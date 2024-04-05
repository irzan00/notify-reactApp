import React from 'react';

function ArchieveButton({id, isArchive, onArchive}) {
    return (
        <button className='note-item__archieve' onClick={() => onArchive(id)}>
            <img src="../public/images/archievebutton.svg" alt="" />
            {isArchive ? 'Pindahkan' : 'Arsipkan' }
        </button>
    )
}

export default ArchieveButton;