/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    const { admin, updated_at } = request.body;
    try {
      const user = this.turnUserAdminUseCase.execute({
        user_id,
        ...admin,
        updated_at,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
