
export async function resolve(promise) {
    
    const resolved = {
        data: null,
        erro: null,
    };

    try {
        resolved.data = await promise;
    } catch(e) {
        resolve.error = e;
    };

    return resolved;
}