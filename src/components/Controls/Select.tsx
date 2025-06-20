import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function SelectComponent({
  handleChange,
  disabled
}: {
  handleChange: ((size: string) => void | ((e: React.ChangeEvent<HTMLInputElement>) => void))
  disabled: boolean
}) {
  return (
    <Select onValueChange={handleChange} disabled={disabled}>
      <SelectTrigger className="w-[40%] max-w-52 bg-gray-300 font-semibold">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Size</SelectLabel>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="25">25</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
