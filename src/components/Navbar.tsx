const Navbar = ({ toggleModal }: { toggleModal: () => void }) => {
  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Secret Vault</h1>
      <button
        onClick={toggleModal}
        className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 focus:outline-none"
      >
        Wallet/Login
      </button>
    </nav>
  );
};
export default Navbar;
