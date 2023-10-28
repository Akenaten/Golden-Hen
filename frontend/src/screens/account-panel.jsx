export default function AccountPanelScreen() {
    return (
        <div>
            <div className="text-xl"> Account Number: 123456789</div>
            <div className="stats bg-primary text-primary-content">
                <div className="stat">
                    <div className="stat-title">Account balance</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm btn-success">
                            Add funds
                        </button>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Current balance</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">Withdrawal</button>
                        <button className="btn btn-sm">deposit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
