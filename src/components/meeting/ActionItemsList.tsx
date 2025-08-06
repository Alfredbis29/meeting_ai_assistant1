const ActionItemsList = () => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <h4 className="text-xl font-semibold mb-4">Action Items</h4>
    <ul>
      <li><input type="checkbox" className="mr-2" />Prepare presentation slides</li>
      <li><input type="checkbox" className="mr-2" />Schedule feedback session</li>
    </ul>
  </div>
);
export default ActionItemsList;