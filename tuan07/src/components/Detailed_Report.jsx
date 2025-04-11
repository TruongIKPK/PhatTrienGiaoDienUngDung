    import { Tag } from 'primereact/tag';
    import { DataTable } from 'primereact/datatable';
    import { Column } from 'primereact/column';
    import { Dialog } from 'primereact/dialog';
    import { InputText } from 'primereact/inputtext';
    import { useState, useEffect } from 'react';
    function Detailed_Report({}){
            const [rowClick, setRowClick] = useState(false);
            const [selectedProducts, setSelectedProducts] = useState(null);
            const products = selectedProducts;
            const [selectedRows, setSelectedRows] = useState([]);
            const [visible, setVisible] = useState(false);
            const [addUserVisible, setAddUserVisible] = useState(false);
            const [editData, setEditData] = useState({
                id: '',
                name: '',
                company: '',
                order_value: '',
                order_date: '',
                status: '',
                img: ''
            });
            const [newUser, setNewUser] = useState({
                name: '',
                company: '',
                order_value: '',
                order_date: '',
                status: 'New',
                img: 'src/assets/default-avatar.png'
            });
            useEffect(() => {
                setSelectedProducts(selectedRows);
            }, [selectedRows]);
            useEffect(() => {
                fetch("http://localhost:3000/customers")
                    .then(res => res.json())
                    .then(json => {
                        console.log("Dữ liệu từ API:", json);
                        setSelectedProducts(json);
                    })
                    .catch(error => console.log(error));
            }, []);
        
            const statusOrderBodyTemplate = (rowData) => {
                const statusMap = {
                    "New": { label: "New", severity: "info" },
                    "In-progress": { label: "In Progress", severity: "warning" },
                    "Completed": { label: "Completed", severity: "success" },
                    "Cancelled": { label: "Cancelled", severity: "danger" }
                };
            
                const status = statusMap[rowData.status] || { label: rowData.status, severity: "secondary" };
            
                return <Tag value={status.label} severity={status.severity} />;
            };
            const representativeBodyTemplate = (rowData) => {
                if (!rowData.name || !rowData.img) return null;
            
                return (
                    <div className="flex align-items-center gap-2">
                        <img alt={rowData.name} src={rowData.img} width="32" />
                        <span>{rowData.name}</span>
                    </div>
                );
            };
            const actionBodyTemplate = (rowData) => {
                return (
                    <div className="flex">
                        <button
                            className='hover:!bg-blue-100'
                            onClick={() => editProduct(rowData)}
                        >   
                            <img src="src/assets/create.png" alt="" />
                        </button>
                    </div>
                );
            };
            const editProduct = (product) => {
                setEditData(product);
                setVisible(true);
            };

            const saveProduct = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/customers/${editData.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(editData)
                    });

                    if (!response.ok) {
                        throw new Error('Failed to update customer');
                    }

                    // Refresh the data after successful update
                    const updatedData = await fetch("http://localhost:3000/customers")
                        .then(res => res.json());
                    setSelectedProducts(updatedData);
                    setVisible(false);
                } catch (error) {
                    console.error('Error updating customer:', error);
                }
            };

            const handleInputChange = (e, isNewUser = false) => {
                const { name, value } = e.target;
                if (isNewUser) {
                    setNewUser(prev => ({
                        ...prev,
                        [name]: value
                    }));
                } else {
                    setEditData(prev => ({
                        ...prev,
                        [name]: value
                    }));
                }
            };

            const addNewUser = async () => {
                try {
                    const response = await fetch("http://localhost:3000/customers", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newUser)
                    });

                    if (!response.ok) {
                        throw new Error('Failed to add new customer');
                    }

                    // Refresh the data after successful addition
                    const updatedData = await fetch("http://localhost:3000/customers")
                        .then(res => res.json());
                    setSelectedProducts(updatedData);
                    setAddUserVisible(false);
                    // Reset newUser state
                    setNewUser({
                        name: '',
                        company: '',
                        order_value: '',
                        order_date: '',
                        status: 'New',
                        img: 'src/assets/default-avatar.png'
                    });
                } catch (error) {
                    console.error('Error adding new customer:', error);
                }
            };
        return(
            <>
                <div>
                        <div className="flex items-center justify-between pb-3">
                            <div className="flex">
                                <img src="src/assets/File text 1.png" alt="" />
                                <p className="font-bold text-xl">Detailed report</p>
                            </div>
                            <div className="space-x-3 flex">
                                <button 
                                    className="flex h-10 px-4 items-center space-x-2 !border !border-pink-500 rounded-lg bg-pink-500 text-white hover:!bg-pink-600 transition-all duration-300"
                                    onClick={() => setAddUserVisible(true)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    <span>Add User</span>
                                </button>
                                <button className="flex h-10 w-25 items-center space-x-2 !border !border-pink-500 justify-center hover:!bg-gray-100 hover:!text-gray-800">
                                    <img className="h-4" src="src/assets/Download.png" alt="" />
                                    <p>Import</p>
                                </button>
                                <button className="flex h-10 w-25 items-center space-x-2s !border !border-pink-500 justify-center hover:!bg-gray-100 hover:!text-gray-800">
                                    <img className="h-4" src="src/assets/Move up.png" alt="" />
                                    <p>Export</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <DataTable
                                value={products}
                                selectionMode={rowClick ? null : 'checkbox'}
                                selection={selectedRows}
                                onSelectionChange={(e) => setSelectedProducts(e.value)}
                                dataKey="id"
                                tableStyle={{ minWidth: '50rem' }}
                                paginator 
                                rows={4} 
                                rowsPerPageOptions={[4, 10, 20]} 
                            >
                                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                <Column header="CUSTOMER" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                                body={representativeBodyTemplate}/>
                                <Column field="company" header="COMPANY"></Column>
                                <Column field="order_value" header="ORDER VALUE"></Column>
                                <Column field="order_date" header="ORDER DATE"></Column>
                                <Column field="status" header="STATUS" body={statusOrderBodyTemplate} sortable></Column>
                                <Column body={actionBodyTemplate} exportable={false}></Column>
                            </DataTable> 
                        </div>
                    </div>

                    <Dialog 
                        visible={addUserVisible} 
                        onHide={() => setAddUserVisible(false)} 
                        header={
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold">Add New User</span>
                                <button 
                                    onClick={() => setAddUserVisible(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        }
                        style={{ width: '50vw' }}
                        className="p-dialog-custom"
                        footer={
                            <div className="flex justify-end space-x-2">
                                <button 
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                                    onClick={() => setAddUserVisible(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    className="px-4 py-2 bg-pink-500 text-white hover:bg-pink-600 rounded-lg transition-all duration-300"
                                    onClick={addNewUser}
                                >
                                    Save
                                </button>
                            </div>
                        }
                    >
                        <div className="p-fluid">
                            <div className="field mb-4">
                                <label className="font-medium mb-2 block">Name</label>
                                <InputText 
                                    id="name" 
                                    name="name" 
                                    value={newUser.name} 
                                    onChange={(e) => handleInputChange(e, true)}
                                    className="w-full p-2 border rounded-lg" 
                                />
                            </div>
                            <div className="field mb-4">
                                <label className="font-medium mb-2 block">Company</label>
                                <InputText 
                                    id="company" 
                                    name="company" 
                                    value={newUser.company} 
                                    onChange={(e) => handleInputChange(e, true)}
                                    className="w-full p-2 border rounded-lg" 
                                />
                            </div>
                            <div className="field mb-4">
                                <label className="font-medium mb-2 block">Order Value</label>
                                <InputText 
                                    id="order_value" 
                                    name="order_value" 
                                    value={newUser.order_value} 
                                    onChange={(e) => handleInputChange(e, true)}
                                    className="w-full p-2 border rounded-lg" 
                                />
                            </div>
                            <div className="field mb-4">
                                <label className="font-medium mb-2 block">Order Date</label>
                                <InputText 
                                    id="order_date" 
                                    name="order_date" 
                                    value={newUser.order_date} 
                                    onChange={(e) => handleInputChange(e, true)}
                                    className="w-full p-2 border rounded-lg" 
                                />
                            </div>
                            <div className="field mb-4">
                                <label className="font-medium mb-2 block">Status</label>
                                <InputText 
                                    id="status" 
                                    name="status" 
                                    value={newUser.status} 
                                    onChange={(e) => handleInputChange(e, true)}
                                    className="w-full p-2 border rounded-lg" 
                                />
                            </div>
                        </div>
                    </Dialog>

                    <Dialog 
                        visible={visible} 
                        onHide={() => setVisible(false)} 
                        header={
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold">Edit Customer</span>
                                <button 
                                    onClick={() => setVisible(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        }
                        style={{ width: '50vw' }}
                        className="p-dialog-custom"
                        footer={
                            <div className="flex justify-end space-x-2">
                                <button 
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                                    onClick={() => setVisible(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    className="px-4 py-2 bg-pink-500 text-white hover:bg-pink-600 rounded-lg transition-all duration-300"
                                    onClick={saveProduct}
                                >
                                    Save
                                </button>
                            </div>
                        }
                    >
                        <div className="p-fluid">
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <InputText 
                                    id="name" 
                                    name="name" 
                                    value={editData.name} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="company">Company</label>
                                <InputText 
                                    id="company" 
                                    name="company" 
                                    value={editData.company} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="order_value">Order Value</label>
                                <InputText 
                                    id="order_value" 
                                    name="order_value" 
                                    value={editData.order_value} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="order_date">Order Date</label>
                                <InputText 
                                    id="order_date" 
                                    name="order_date" 
                                    value={editData.order_date} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="status">Status</label>
                                <InputText 
                                    id="status" 
                                    name="status" 
                                    value={editData.status} 
                                    onChange={handleInputChange} 
                                />
                            </div>
                        </div>
                    </Dialog>
            </>
        )
    }
    export default Detailed_Report;