const Favourites = () => {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold">Favourites</h2>
      <p className="text-sm text-muted-foreground">
        View and manage your favourites
      </p>
      <div className="overflow-x-auto w-full mt-4">
        <table className="w-full text-left table-auto">
          <tbody>{/* Add your order rows here */}</tbody>
        </table>
      </div>
    </div>
  );
};
export default Favourites;
