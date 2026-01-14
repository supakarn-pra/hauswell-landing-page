import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckIcon, ShieldCheckIcon, FileTextIcon, HeadphonesIcon, MailIcon, PhoneIcon, HomeIcon, UmbrellaIcon, AlertTriangleIcon, ClipboardCheckIcon } from "lucide-react";

const HausInsure = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="size-8 text-[#6B7B6E]" />
            <span className="text-xl font-semibold text-gray-800">Haus Insure</span>
          </div>
          <Button size="sm" className="bg-[#A89376] hover:bg-[#8F7E63] text-white">
            ติดต่อเรา 02-123-4567
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-[#6B7B6E] to-[#8A9A8D] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                เปรียบเทียบได้ในที่เดียว<br />
                ในรูปแบบที่ตอบโจทย์คนรุ่นใหม่<br />
                กลับบ้านมา...
              </h1>
              <p className="text-lg mb-6 text-white/90">
                ควรเจอบ้านที่ปลอดภัย มั่นใจ และพร้อมดูแลทุกคน<br />
                ด้วยประกันที่เหมาะกับคุณจริงๆ
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <ShieldCheckIcon className="size-5" />
                  <span className="text-sm">คุ้มครองครอบคลุม</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckIcon className="size-5" />
                  <span className="text-sm">เปรียบเทียบง่าย</span>
                </div>
              </div>
              <Button size="lg" className="bg-[#A89376] hover:bg-[#8F7E63] text-white">
                เริ่มต้นเลือกแพ็คเกจ
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Happy family at home"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                เลือกความคุ้มครองที่เหมาะกับบ้านของคุณ
              </h2>
              <form className="grid md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel>ประเภทที่อยู่อาศัย</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภทที่อยู่อาศัย" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="house">บ้านเดี่ยว</SelectItem>
                        <SelectItem value="condo">คอนโดมิเนียม</SelectItem>
                        <SelectItem value="townhouse">ทาวน์เฮ้าส์</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>มูลค่าโครงสร้างบ้าน</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกมูลค่า" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">1-3 ล้านบาท</SelectItem>
                        <SelectItem value="2">3-5 ล้านบาท</SelectItem>
                        <SelectItem value="3">5-10 ล้านบาท</SelectItem>
                        <SelectItem value="4">มากกว่า 10 ล้านบาท</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel>ชื่อ-นามสกุล</FieldLabel>
                  <Input placeholder="กรอกชื่อ-นามสกุล" />
                </Field>
                <Field>
                  <FieldLabel>เบอร์โทรศัพท์</FieldLabel>
                  <Input placeholder="กรอกเบอร์โทรศัพท์" />
                </Field>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-[#6B7B6E] hover:bg-[#5A6A5D] text-white">
                    เปรียบเทียบแพ็คเกจ
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              4 ความเสี่ยงหลักที่ไม่ควรมอง...<br />
              ไม่เห็น เพราะอาจสายเกินแก้
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-[#6B7B6E] transition-all">
              <CardHeader>
                <div className="bg-[#6B7B6E]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangleIcon className="size-6 text-[#6B7B6E]" />
                </div>
                <CardTitle className="text-lg">อุบัติเหตุภายนอก</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  เช่น อัคคีภัย น้ำท่วม แผ่นดินไหว และภัยธรรมชาติอื่นๆ
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#6B7B6E] transition-all">
              <CardHeader>
                <div className="bg-[#6B7B6E]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <UmbrellaIcon className="size-6 text-[#6B7B6E]" />
                </div>
                <CardTitle className="text-lg">ความรับผิด</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  ต่อบุคคลภายนอก ความเสียหายที่เกิดจากทรัพย์สินของคุณ (Cash Paid)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#6B7B6E] transition-all">
              <CardHeader>
                <div className="bg-[#6B7B6E]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="size-6 text-[#6B7B6E]" />
                </div>
                <CardTitle className="text-lg">ทรัพย์สินภายใน</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  เฟอร์นิเจอร์ เครื่องใช้ไฟฟ้า และของมีค่าภายในบ้าน (Fire & Transfer)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#6B7B6E] transition-all">
              <CardHeader>
                <div className="bg-[#6B7B6E]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheckIcon className="size-6 text-[#6B7B6E]" />
                </div>
                <CardTitle className="text-lg">ภัยธรรมชาติ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  คุ้มครองความเสียหายจากลูกเห็บ ฟ้าผ่า พายุ (Cash Paid)
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              แพ็คเกจประกันที่เหมาะกับคุณ
            </h2>
            <p className="text-gray-600">เลือกแพ็คเกจที่ตอบโจทย์การใช้ชีวิตของคุณมากที่สุด</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border-2 hover:border-[#6B7B6E] transition-all hover:shadow-xl">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-center text-xl">Package 1</CardTitle>
                <CardDescription className="text-center text-lg font-semibold text-gray-800">
                  Basic Care
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-600 mb-2">เริ่มต้นเพียง</div>
                  <div className="text-3xl font-bold text-[#6B7B6E]">฿1,500</div>
                  <div className="text-sm text-gray-500">ต่อปี</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ความเสียหายอัคคีภัย</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ความเสียหายฟ้าผ่า</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ความเสียหายจากระเบิด</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ความเสียหายภัยน้ำ</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#6B7B6E] hover:bg-[#5A6A5D] text-white">
                  เลือกแพ็คเกจนี้
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-[#6B7B6E] shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#A89376] text-white text-xs px-3 py-1 rounded-full">
                แนะนำ
              </div>
              <CardHeader className="bg-[#6B7B6E] text-white">
                <CardTitle className="text-center text-xl">Package 2</CardTitle>
                <CardDescription className="text-center text-lg font-semibold text-white">
                  Full Care
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-600 mb-2">ราคา</div>
                  <div className="text-3xl font-bold text-[#6B7B6E]">฿3,000</div>
                  <div className="text-sm text-gray-500">ต่อปี</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">ครบทุกความคุ้มครองจาก Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ความรับผิดต่อบุคคลภายนอก</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ทรัพย์สินภายในบ้าน</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ค่าเช่าที่พักชั่วคราว</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">บริการช่วยเหลือฉุกเฉิน 24 ชม.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#6B7B6E] hover:bg-[#5A6A5D] text-white">
                  เลือกแพ็คเกจนี้
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 hover:border-[#6B7B6E] transition-all hover:shadow-xl">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-center text-xl">Package 3</CardTitle>
                <CardDescription className="text-center text-lg font-semibold text-gray-800">
                  ICU Full Option
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-600 mb-2">ราคา</div>
                  <div className="text-3xl font-bold text-[#6B7B6E]">฿5,000 - 6,000</div>
                  <div className="text-sm text-gray-500">ต่อปี</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">ครบทุกความคุ้มครองจาก Full Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">วงเงินคุ้มครองสูงสุด</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">คุ้มครองทรัพย์สินมูลค่าสูง</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">บริการประเมินความเสียหาย</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="size-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">ดูแลโดยทีมผู้เชี่ยวชาญ</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#6B7B6E] hover:bg-[#5A6A5D] text-white">
                  เลือกแพ็คเกจนี้
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">ความคุ้มครอง</TableHead>
                    <TableHead className="text-center font-semibold">Package 1<br/>Basic Care</TableHead>
                    <TableHead className="text-center font-semibold bg-[#6B7B6E]/5">Package 2<br/>Full Care</TableHead>
                    <TableHead className="text-center font-semibold">Package 3<br/>ICU Full Option</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ความเสียหายอัคคีภัย</TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center bg-[#6B7B6E]/5">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ความเสียหายฟ้าผ่า</TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center bg-[#6B7B6E]/5">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ความรับผิดต่อบุคคล</TableCell>
                    <TableCell className="text-center text-gray-400">-</TableCell>
                    <TableCell className="text-center bg-[#6B7B6E]/5">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ทรัพย์สินภายในบ้าน</TableCell>
                    <TableCell className="text-center text-gray-400">-</TableCell>
                    <TableCell className="text-center bg-[#6B7B6E]/5">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">บริการฉุกเฉิน 24 ชม.</TableCell>
                    <TableCell className="text-center text-gray-400">-</TableCell>
                    <TableCell className="text-center bg-[#6B7B6E]/5">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">วงเงินคุ้มครองสูงสุด</TableCell>
                    <TableCell className="text-center text-gray-400">-</TableCell>
                    <TableCell className="text-center bg-[#6B7B6E]/5 text-gray-400">-</TableCell>
                    <TableCell className="text-center">
                      <CheckIcon className="inline-block size-5 text-green-600" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Technology & Standard
            </h2>
            <p className="text-gray-600">เทคโนโลยีและมาตรฐานที่คุณไว้วางใจได้</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-shadow">
                <ShieldCheckIcon className="size-10 text-[#6B7B6E]" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">ปลอดภัยสูงสุด</h3>
              <p className="text-sm text-gray-600">เข้ารหัสข้อมูลระดับธนาคาร</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-shadow">
                <FileTextIcon className="size-10 text-[#6B7B6E]" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">เอกสารครบถ้วน</h3>
              <p className="text-sm text-gray-600">จัดเตรียมเอกสารอัตโนมัติ</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-shadow">
                <HeadphonesIcon className="size-10 text-[#6B7B6E]" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">บริการตลอด 24 ชม.</h3>
              <p className="text-sm text-gray-600">ทีมงานพร้อมช่วยเหลือ</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-xl shadow-md flex items-center justify-center mx-auto mb-4 hover:shadow-lg transition-shadow">
                <MailIcon className="size-10 text-[#6B7B6E]" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">แจ้งเตือนอัตโนมัติ</h3>
              <p className="text-sm text-gray-600">ไม่พลาดทุกข่าวสาร</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#6B7B6E] to-[#8A9A8D] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                อยู่เป็นเยี่ยง<br />
                คลิกเดียวก็เป็นเจ้าของ<br />
                กลับบ้านมา
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckIcon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ใช้งานง่าย</h3>
                    <p className="text-white/80 text-sm">ออกแบบให้ใช้งานง่าย เข้าใจได้ทันที</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckIcon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ครบจบในแอปเดียว</h3>
                    <p className="text-white/80 text-sm">จัดการทุกอย่างได้ในที่เดียว</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <CheckIcon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ติดตามสถานะแบบ Real-time</h3>
                    <p className="text-white/80 text-sm">รับข่าวสารทันทีที่มีการอัปเดต</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-[#6B7B6E] hover:bg-gray-100">
                  ดาวน์โหลดแอป iOS
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  ดาวน์โหลดแอป Android
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-64">
                <img
                  src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Mobile app preview"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border">
              <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                อยากรู้เรื่องความคุ้มครองมากกว่านี้<br />
                กลับบ้านมามั่นใจมากขึ้น
              </h2>
              <p className="text-center text-gray-600 mb-8">
                ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาฟรี
              </p>
              <form className="space-y-6">
                <FieldGroup>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field>
                      <FieldLabel>ชื่อ</FieldLabel>
                      <Input placeholder="กรอกชื่อ" />
                    </Field>
                    <Field>
                      <FieldLabel>นามสกุล</FieldLabel>
                      <Input placeholder="กรอกนามสกุล" />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel>เบอร์โทรศัพท์</FieldLabel>
                    <Input type="tel" placeholder="กรอกเบอร์โทรศัพท์" />
                  </Field>
                  <Field>
                    <FieldLabel>อีเมล</FieldLabel>
                    <Input type="email" placeholder="กรอกอีเมล" />
                  </Field>
                  <Field orientation="horizontal" className="items-start">
                    <Checkbox id="consent" />
                    <FieldLabel htmlFor="consent" className="cursor-pointer">
                      ยินยอมให้ Haus Insure ติดต่อกลับเพื่อให้คำปรึกษา
                    </FieldLabel>
                  </Field>
                  <Field orientation="horizontal" className="items-start">
                    <Checkbox id="privacy" />
                    <FieldLabel htmlFor="privacy" className="cursor-pointer">
                      ยอมรับนโยบายความเป็นส่วนตัว และเงื่อนไขการใช้บริการ
                    </FieldLabel>
                  </Field>
                  <Button type="submit" size="lg" className="w-full bg-[#A89376] hover:bg-[#8F7E63] text-white">
                    ยืนยันข้อมูลและให้ติดต่อกลับ
                  </Button>
                </FieldGroup>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3A4A3D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HomeIcon className="size-6" />
                <span className="text-lg font-semibold">Haus Insure</span>
              </div>
              <p className="text-sm text-white/80">
                ผู้ให้บริการประกันภัยบ้านและทรัพย์สินที่คุณไว้วางใจได้
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">บริการ</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">ประกันบ้าน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ประกันคอนโด</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ประกันทาวน์เฮ้าส์</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">เกี่ยวกับเรา</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">เกี่ยวกับบริษัท</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ทีมงาน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ติดต่อเรา</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">ติดต่อ</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="size-4" />
                  <span>02-123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon className="size-4" />
                  <span>info@hausinsure.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Haus Insure. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:021234567"
        className="fixed bottom-6 right-6 bg-[#A89376] hover:bg-[#8F7E63] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Call us"
      >
        <PhoneIcon className="size-6" />
      </a>
    </div>
  );
};

export default HausInsure;
