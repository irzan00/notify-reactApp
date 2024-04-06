import React from 'react';

function ArchieveButton({id, isArchive, onArchive}) {
    return (
        <button className='note-item__archieve w-100 justify-content-center' onClick={() => onArchive(id)}>
            <img src="/images/archievebutton.svg" alt="" />
            {isArchive ? 
            <p>Pindahkan</p>
            : 
            <p>Arsipkan</p> }
        </button>
    )
}

export default ArchieveButton;