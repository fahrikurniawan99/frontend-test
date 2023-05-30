import Label from "@Elements/Label";
import * as React from "react";
import Link from "next/link";
import UserService from "@/services/user";
import { User } from "@prisma/client";
import Input from "@/components/Elements/Input";
import ReactLoading from "react-loading";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  dataUser: (user: User) => void;
};

const ApplyForm = ({ dataUser }: Props) => {
  const [user, setUser] = React.useState<User>();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    UserService.get().then((response) => {
      setIsLoading(true);
      const data = response.data.data;
      setUser(data);
      dataUser(data);
      setIsLoading(false);
    });

    return () => {};
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center w-full">
        <ReactLoading type="bars" className="w-20 h-20" color="#2563eb" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-bold text-xl leading-6 text-gray-700">
        Data calon pelamar
      </h2>
      <p className="text-gray-400">
        Pastikan bahwa data sudah valid dan terupdate.{" "}
        <Link href={"/profile"} className="underline text-blue-600">
          klik ini jika belum
        </Link>
      </p>
      <form className="mb-3 mt-5 space-y-3 max-w-[400px]">
        <div>
          <Label>Nama lengkap</Label>
          <div className="relative">
            <Input disabled id="name" name="name" value={user?.name ?? ""} />
            <CheckCircleIcon className="w-5 absolute text-green-500 right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <Label>Alamat email</Label>
          <div className="relative">
            <Input disabled id="email" name="email" value={user?.email ?? ""} />
            <CheckCircleIcon className="w-5 absolute text-green-500 right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <Label>Pendidikan terakhir</Label>
          <div className="relative">
            <Input
              disabled
              id="education"
              name="education"
              value={user?.education ?? ""}
            />
            <CheckCircleIcon className="w-5 absolute text-green-500 right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <Label>Jurusan</Label>
          <div className="relative">
            <Input disabled id="major" name="major" value={user?.major ?? ""} />
            <CheckCircleIcon className="w-5 absolute text-green-500 right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div>
          <Label>Curriculum vitae</Label>
          <object
            data={"/uploads/files/Cv-Mohamad-Fahri-Kurniawan.pdf"}
            className="h-[450px] w-full"
          ></object>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
