// Минимальные типы используемой части supabase-js и статуса облака
export interface SbError {
    message: string;
    context?: { status?: number };
}
export interface CloudUser {
    id: string;
    email?: string;
}
export interface SbSession {
    user: CloudUser;
}
export type SbRes<T = unknown> = { data: T; error: SbError | null };
export interface SbTable {
    select(cols: string): { eq(col: string, v: string): { maybeSingle(): PromiseLike<SbRes<unknown>> } };
    delete(): { eq(col: string, v: string): PromiseLike<{ error: SbError | null }> };
    upsert(
        rows: object | object[],
        opts: { onConflict: string; ignoreDuplicates?: boolean },
    ): PromiseLike<{ error: SbError | null }>;
}
export interface SbAuth {
    getSession(): Promise<{ data: { session: SbSession | null } }>;
    onAuthStateChange(cb: (event: string, session: SbSession | null) => void): unknown;
    signUp(a: {
        email: string;
        password: string;
        options?: { emailRedirectTo?: string };
    }): Promise<SbRes<{ session: SbSession | null }>>;
    signInWithPassword(a: { email: string; password: string }): Promise<{ error: SbError | null }>;
    signOut(): Promise<{ error: SbError | null }>;
    resetPasswordForEmail(email: string, opts: { redirectTo?: string }): Promise<{ error: SbError | null }>;
    resend(a: {
        type: 'signup';
        email: string;
        options?: { emailRedirectTo?: string };
    }): Promise<{ error: SbError | null }>;
    updateUser(a: { password: string }): Promise<{ error: SbError | null }>;
}
export interface SbClient {
    auth: SbAuth;
    from(table: string): SbTable;
    rpc(fn: string, args?: Record<string, unknown>): PromiseLike<SbRes<unknown>>;
    functions: { invoke(name: string, opts: { body?: unknown; method?: 'GET' | 'POST' }): Promise<SbRes<unknown>> };
}
export interface SbLib {
    createClient(url: string, key: string, opts: object): SbClient;
}

export interface CloudStatus {
    enabled: boolean;
    loading: boolean;
    user: CloudUser | null;
    lastSync: Date | null;
    lastError: string | null;
    pushing: boolean;
    pulling: boolean;
}

export interface YandexResult {
    text?: string;
    defs?: { tr: { text: string }[] }[];
}
