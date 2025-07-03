export default function isPatient(user: string ): boolean {
    return user.toLocaleLowerCase() === 'patient'
}