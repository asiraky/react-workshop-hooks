const CreateFakeServerMonitorAPI = () => {
    let online = false;
    const fns = [];
    
    const notify = () => {
        online = !online;
        fns.forEach(fn => fn(online));
    }

    setTimeout(() => {
        notify();
        setInterval(() => {
            notify();
        }, 5000);
    }, 1000);

    return {
        subscribe: fn => {
            fns.push(fn);
        },
        unsubscribe: fn => {
            const index = fns.indexOf(fn);
            if (index !== -1) {
                fns.splice(index, 1);
            }
        }
    };
}

export const ServerMonitorAPI = CreateFakeServerMonitorAPI();