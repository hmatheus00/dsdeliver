package com.matheushenrique.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matheushenrique.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
