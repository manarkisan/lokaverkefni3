import { useState, useEffect } from 'react'
import { supabase } from '../../../shared/lib/supabase'
import type { User } from '@supabase/supabase-js'
import { Button } from '#components/ui/button'
import { Input } from '#components/ui/input'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '#components/ui/card'

type AccountProps = {
  user: User
}

export default function Account({ user }: AccountProps) {
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState<string | null>(null)


  useEffect(() => {
    let ignore = false

    async function getProfile() {
      setLoading(true)
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', user.id)
        .single()

      if (!ignore) {
        if (error) {
          console.warn(error)
        } else if (data) {
          setFullName(data.full_name)
    
        }
      }
      setLoading(false)
    }

    getProfile()
    return () => { ignore = true }
  }, [user])

  async function updateProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        full_name: fullName,
      })

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
  }

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Your Account</CardTitle>
      </CardHeader>

      <form onSubmit={updateProfile}>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-muted-foreground">
              Email
            </label>
            <Input
              id="email"
              type="text"
              value={user.email ?? ''}
              disabled
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="full_name" className="text-sm">
              Full name
            </label>
            <Input
              id="full_name"
              type="text"
              required
              value={fullName ?? ''}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Saving...' : 'Update Profile'}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}