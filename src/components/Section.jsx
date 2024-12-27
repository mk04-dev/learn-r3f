import React from "react";
function Section({ right, children }) {
	return <section className={`relative h-screen flex flex-col justify-center p-10 ${right ? 'items-end' : ''}`}>
        <div className="bg-white p-4 rounded w-fit">{children}</div>;
    </section>
}

export default React.memo(Section);
