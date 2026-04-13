/**
 * sessionStorage
 */
export const $sessionStorage = {
    // 存储
    set: (params) => {
        const { name, content, type } = params
        const obj = {
            dataType: typeof content,
            content: content,
            type: type,
            datetime: new Date().getTime(),
        }
        // 直接放到sessionStorage
        window.sessionStorage.setItem(name, JSON.stringify(obj))
    },
    // 获取
    get: (name) => {
        let obj = {}
        let content
        obj = window.sessionStorage.getItem(name)
        if (!obj) return
        try {
            obj = JSON.parse(obj)
        } catch {
            obj = {}
        }

        if (obj.dataType === 'string') {
            content = obj.content
        } else if (obj.dataType === 'number') {
            content = Number(obj.content)
        } else if (obj.dataType === 'object') {
            content = obj.content
        } else {
            content = obj.content
        }
        return content
    },
    // 删除
    remove: (name) => {
        window.sessionStorage.removeItem(name)
    },
}

/**
 * 本地存储
 */
export let $localStorage = {
    // 存储
    getCurApplicationInfo() {
        return this.get('E-o-cur-app')
    },
    setCurApplicationInfo(content) {
        this.set({ name: 'E-o-cur-app', content })
    },
    removeCurApplicationInfo(content) {
        this.remove('E-o-cur-app')
    },
    getTenantCode() {
        return this.get('E-o-tenant-code')
    },
    setTenantCode(content) {
        this.set({ name: 'E-o-tenant-code', content })
    },
    removeTenantCode(content) {
        this.remove('E-o-tenant-code')
    },
    getTenantInfo() {
        return this.get('E-o-tenant-info')
    },
    setTenantInfo(content) {
        this.set({ name: 'E-o-tenant-info', content })
    },
    getENC() {
        return this.get('E-o-enc')
    },
    setENC(content) {
        this.set({ name: 'E-o-enc', content })
    },
    getToken() {
        return this.get('E-o-token')
    },
    setToken(content) {
        this.set({ name: 'E-o-token', content })
    },
    removeToken(content) {
        this.remove('E-o-token')
    },
    getMyProfile() {
        return this.get('E-o-my-profile')
    },
    setMyProfile(content) {
        this.set({ name: 'E-o-my-profile', content })
    },
    removeMyProfile(content) {
        this.remove('E-o-my-profile')
    },
    set(params) {
        const { name, content, type } = params
        const obj = {
            dataType: typeof content,
            content: content,
            type: type,
            datetime: new Date().getTime(),
        }
        // localStorage
        window.localStorage.setItem(name, JSON.stringify(obj))
    },
    // 获取
    get(name) {
        let obj = {}
        let content
        obj = window.localStorage.getItem(name)
        if (!obj) return
        try {
            obj = JSON.parse(obj)
        } catch (e) {
            obj = {}
        }

        if (obj.dataType === 'string') {
            content = obj.content
        } else if (obj.dataType === 'number') {
            content = Number(obj.content)
        } else if (obj.dataType === 'object') {
            content = obj.content
        } else {
            content = obj.content
        }
        return content
    },
    // 删除
    remove(name) {
        window.localStorage.removeItem(name)
    },
}
