import React, { useState } from 'react';

export default function Hitung() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Jumlah Pengunjung : {count} orang</p>
            <button onClick={ () => setCount(count+1)}>Tambah Pengunjung</button>
        </div>
    )
}
