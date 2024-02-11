export default function Footer({ items }) {
    const totalItems = items.length;
    const totalChecked = items.filter(item => item.checked).length;
    const percentage = Math.floor((totalChecked / totalItems) * 100);
    if (totalItems === 0) {
        return null;
    }

    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {totalChecked} barang sudah dibeli ( {percentage}% )</footer>
}